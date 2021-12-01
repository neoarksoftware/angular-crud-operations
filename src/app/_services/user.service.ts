import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

const baseUrl = `${environment.apiUrl}/users`;

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    //Get All users list
    getAll() {
        return this.http.get<User[]>(baseUrl);
    }

    //Get user by list
    getById(id: string) {
        return this.http.get<User>(`${baseUrl}/${id}`);
    }

    //Add Create users
    create(params: any) {
        return this.http.post(baseUrl, params);
    }

    //Update user details
    update(id: string, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    //Delete user
    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}