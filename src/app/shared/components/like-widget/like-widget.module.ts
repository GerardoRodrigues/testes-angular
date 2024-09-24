import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LikeWidgetComponente } from "./like-widget.component";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";

@NgModule({
    declarations: [
        LikeWidgetComponente
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        LikeWidgetComponente
    ],
    providers: [UniqueIdService]
})
export class LikeWidgetModule {}