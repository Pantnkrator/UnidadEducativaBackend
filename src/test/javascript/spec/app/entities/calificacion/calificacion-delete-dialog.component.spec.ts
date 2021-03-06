/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { UnidadEducativaBackendTestModule } from '../../../test.module';
import { CalificacionDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/calificacion/calificacion-delete-dialog.component';
import { CalificacionService } from '../../../../../../main/webapp/app/entities/calificacion/calificacion.service';

describe('Component Tests', () => {

    describe('Calificacion Management Delete Component', () => {
        let comp: CalificacionDeleteDialogComponent;
        let fixture: ComponentFixture<CalificacionDeleteDialogComponent>;
        let service: CalificacionService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [UnidadEducativaBackendTestModule],
                declarations: [CalificacionDeleteDialogComponent],
                providers: [
                    CalificacionService
                ]
            })
            .overrideTemplate(CalificacionDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CalificacionDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CalificacionService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
