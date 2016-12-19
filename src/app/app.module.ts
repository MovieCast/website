import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent }     from './app.component';
import { HeaderComponent }  from './header.component';
import { FooterComponent }  from './footer.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
})
export class AppModule {}