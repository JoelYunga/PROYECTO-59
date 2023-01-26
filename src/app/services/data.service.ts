import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarioLoged: any;
  //apiURL:string = "http://localhost:3000";
  apiURL:string ="https://api-edusmart.herokuapp.com"

  constructor(public http: HttpClient) {
  }

  obtenerUsuarioLogeado(){
    this.usuarioLoged = JSON.parse(localStorage.getItem('logeado'));
  }

  getProgresoByModo(id,modo,callback){
    this.http.get(`${this.apiURL}/niveles/${id}/${modo}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  obtenerNiveles(callback){
    this.http.get(`${this.apiURL}/niveles`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getReadLevelList(id,nivel,callback){

    this.http.get(`${this.apiURL}/questions/read/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getWriteLevelList(id,nivel,callback){

    this.http.get(`${this.apiURL}/questions/write/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getCompLevelList(id,nivel,callback){

    this.http.get(`${this.apiURL}/questions/comp/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getAnsweredReadList(id,nivel,callback){

    this.http.get(`${this.apiURL}/answered/read/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getAnsweredWriteList(id,nivel,callback){

    this.http.get(`${this.apiURL}/answered/write/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getAnsweredCompList(id,nivel,callback){

    this.http.get(`${this.apiURL}/answered/comp/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  respuestaContestada(idU,nivel,acierto,error,idP,modo,callback){
    this.http.get(`${this.apiURL}/questions/read/resp/${idU}/${nivel}/${acierto}/${error}/${idP}/${modo}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  updateLeer(id,callback){
    this.http.get<any>(`${this.apiURL}/questions/read/${id}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  updateWrite(id,callback){
    this.http.get<any>(`${this.apiURL}/questions/write/${id}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  updateComp(id,callback){
    this.http.get<any>(`${this.apiURL}/questions/comp/${id}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  falseLeer(callback){
    this.http.get<any>(`${this.apiURL}/false/read/`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  falseWrite(callback){
    this.http.get<any>(`${this.apiURL}/false/write/`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  falseComp(callback){
    this.http.get<any>(`${this.apiURL}/false/comp/`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  userScore(callback){
    this.http.get<any>(`${this.apiURL}/aciertos/`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  userScoreById(id,callback){
    this.http.get<any>(`${this.apiURL}/aciertos/${id}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

}
