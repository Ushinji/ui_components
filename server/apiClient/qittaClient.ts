import Axios, { AxiosInstance } from 'axios';

export type QittaItem = {
  url: string;
  title: string;
};

class QittaClient {
  public axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create({
      baseURL: 'https://qiita.com/api/v2',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public getItems() {
    return this.axios.get('items').then(res => {
      return res.data as QittaItem[];
    });
  }
}

export default QittaClient;
