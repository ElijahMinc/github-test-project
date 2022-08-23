import axios, {
  AxiosInstance,
  CancelTokenSource,
  CancelTokenStatic,
} from "axios";
import { $BaseApi } from "../http/axios";

export class HttpRequest {
  $api: AxiosInstance;
  cancelToken: CancelTokenStatic;
  source: CancelTokenSource;

  constructor() {
    this.$api = $BaseApi;
    this.cancelToken = axios.CancelToken;
    this.source = this.cancelToken.source();
  }

  abortRequest() {
    this.source.cancel();
    this.source = this.cancelToken.source();
  }
}
