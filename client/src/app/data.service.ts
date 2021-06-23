import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // ADD API SERVER HERE
  private ROOT_API_SERVER = "http://localhost:8000/"
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(url){
    return this.httpClient.get(this.ROOT_API_SERVER+url)
  }

  public sendDeleteRequest(url){
    return this.httpClient.delete(this.ROOT_API_SERVER+url)
  }

  public sendPutRequest(url,body){
    return this.httpClient.put(this.ROOT_API_SERVER+url,body)
  }
  public sendPostRequest(url, body){
    return this.httpClient.post(this.ROOT_API_SERVER+url, body);
  }
  public setPatchRequest(url, body){
    return this.httpClient.patch(this.ROOT_API_SERVER+url, body);
  }
}
