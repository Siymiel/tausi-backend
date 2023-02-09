export interface UseCaseStatus {
  status: 'ok' | 'warn' | 'error';
  msg?: string;
  data? : any;
}
