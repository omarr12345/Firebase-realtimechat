import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "angularfire2/database";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { ChatFormComponent } from "./chat-form/chat-form.component";
import { ChatroomComponent } from "./chatroom/chatroom.component";
import { FeedComponent } from "./feed/feed.component";
import { MessageComponent } from "./message/message.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserItemComponent } from "./user-item/user-item.component";
import { appRoutes } from "../../routes";

import { ChatService } from "../../services/chat.service";
import { AuthService } from "../../services/auth.service";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ChatService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
