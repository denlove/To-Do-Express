import * as fs from 'fs'
import { ERROR_APPENDING_LOG, ERROR_CLOSING_LOG, ERROR_OPENING_LOG } from '../../utils/mock'
import { IPrintLog } from '../../interfaces/ILogger'
import * as path from 'path'

abstract class LogsBuilder {
    public dest: string = 'logs.txt'
    public linePrefix: string
    public today: Date = new Date()

    constructor() {
        this.linePrefix = this._getLinePrefix(this.today)
    }

    protected addLog({ type, message }: IPrintLog) {
        fs.open(this.dest, 'a', (_err, _fileDescriptor) => {
            if (!_err && _fileDescriptor) {
                fs.appendFile(
                    _fileDescriptor,
                    `${this.linePrefix} [${type}] ${message}\n`,
                    _err => {
                        if (!_err) {
                            fs.close(_fileDescriptor, _err => {
                                if (!_err) {
                                    return true
                                } else {
                                    return console.log(ERROR_CLOSING_LOG)
                                }
                            })
                        } else {
                            return console.log(ERROR_APPENDING_LOG)
                        }
                    },
                )
            } else {
                return console.log(_err, ERROR_OPENING_LOG)
            }
        })
    }

    private _getLinePrefix(_today: Date): string {
        const _date = `${_today.getDay()}/${_today.getMonth()}/${_today.getFullYear()}`
        const _time = `${_today.getHours()}:${_today.getMinutes()}:${_today.getSeconds()}`

        return `${_date} | ${_time} >`
    }
}

export default LogsBuilder
