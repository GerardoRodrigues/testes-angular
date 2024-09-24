import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LikeWidgetComponente } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponente.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponente> = null;
    let component: LikeWidgetComponente = null;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponente);
        component = fixture.componentInstance;
    });

    it('Should be created component', () => {
        expect(component).toBeTruthy();
    });

    it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    });

    it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
        component.id = 'someId';
        fixture.detectChanges();
        expect(component.id).toBe('someId');
    })

    it(`#${LikeWidgetComponente.prototype.like.name} should trigger (@Output liked) when called`, () => {
        spyOn(component.liked, `emit`)
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    });
})