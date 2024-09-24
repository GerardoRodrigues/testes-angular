import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { LikeWidgetComponente } from "./like-widget.component";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";

describe(LikeWidgetComponente.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponente> = null
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LikeWidgetComponente],
            imports: [FontAwesomeModule],
            providers: [UniqueIdService]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponente);
    })

    it('Should be created component', () => {
        const instance = fixture.componentInstance;
        expect(instance).toBeTruthy();
    })
})