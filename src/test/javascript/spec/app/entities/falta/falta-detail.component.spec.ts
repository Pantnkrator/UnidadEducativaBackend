/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UnidadEducativaBackendTestModule } from '../../../test.module';
import { FaltaDetailComponent } from '../../../../../../main/webapp/app/entities/falta/falta-detail.component';
import { FaltaService } from '../../../../../../main/webapp/app/entities/falta/falta.service';
import { Falta } from '../../../../../../main/webapp/app/entities/falta/falta.model';

describe('Component Tests', () => {

    describe('Falta Management Detail Component', () => {
        let comp: FaltaDetailComponent;
        let fixture: ComponentFixture<FaltaDetailComponent>;
        let service: FaltaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [UnidadEducativaBackendTestModule],
                declarations: [FaltaDetailComponent],
                providers: [
                    FaltaService
                ]
            })
            .overrideTemplate(FaltaDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FaltaDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FaltaService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Falta(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.falta).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
