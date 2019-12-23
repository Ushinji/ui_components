import Axios, { AxiosInstance } from 'axios';

export type QittaItem = {
  url: string;
  title: string;
};

export type QittaTag = {
  followers_count: number;
  icon_url: string;
  id: string;
  items_count: number;
};

// READ: https://qiita.com/api/v2/docs
const token = process.env.QittaAccessToken;

class QittaClient {
  public axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create({
      baseURL: 'https://qiita.com/api/v2',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  public getItems() {
    return this.axios.get('items').then(res => {
      return res.data as QittaItem[];
    });
  }

  public getTags() {
    return this.axios.get('tags').then(res => {
      return res.data as QittaTag[];
    });
  }
}

export default QittaClient;
