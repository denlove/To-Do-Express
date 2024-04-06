export interface IPrintLog {
    type: 'INFO' | 'WARNING' | 'ERROR' | 'CUSTOM'
    message: string
}
