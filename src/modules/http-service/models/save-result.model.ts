
export enum EsitoEnum{
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

/**
 * SaveResult
 */
export interface SaveResult {
    esito: EsitoEnum;
    message: string;
}
