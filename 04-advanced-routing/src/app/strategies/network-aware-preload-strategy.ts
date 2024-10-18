import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

export declare var navigator: any;

@Injectable({ providedIn: 'root' })
export class NetworkAwarePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log('this.hasGoodConnection();');
    return this.hasGoodConnection() ? load() : EMPTY;
  }

  hasGoodConnection(): boolean {
    const conn = navigator.connection;
    if (!conn || conn.saveData) return false;

    const connectionsToAvoid = ['slow-2g', '2g', '3g'];
    const currentConnectionType = conn.effectiveType;
    
    if (connectionsToAvoid.includes(currentConnectionType)) {
      return false;
    }

    return true;
  }
}
