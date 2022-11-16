import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';
import { FormataTelefonePipe } from './pipes/formata-telefone.pipe';
import { FormataCpfPipe } from './pipes/formata-cpf.pipe';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    TabelasComponent,
    FormataTelefonePipe,
    FormataCpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
