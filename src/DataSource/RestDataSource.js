import React, { Component } from "react";
import Axios from "axios";
class RestDataSource extends Component {
  constructor(base_url) {
    super(base_url);
    this.BASE_URL = base_url;
  }

  GetData(callback) {
    this.SendRequest("get", this.BASE_URL, callback);
  }

  async SendRequest(method, url, callback, data) {
    callback(
      (
        await Axios.request({
          method: method,
          url: url,
          data: data
        })
      ).data
    );
  }
}

export default RestDataSource;
