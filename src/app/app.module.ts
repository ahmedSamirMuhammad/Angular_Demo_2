import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    SkillBarComponent,
    PortfolioCardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
