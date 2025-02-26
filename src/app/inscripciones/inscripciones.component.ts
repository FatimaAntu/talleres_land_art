import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../services/weather.service';
/**
 * Componente que gestiona el formulario de inscripción a los talleres.
 * Permite a los usuarios inscribir a un niño en un taller, validando los datos introducidos.
 */
@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css'],
  providers: [WeatherService] 
})
export class InscripcionesComponent {
    /**
   * Formulario reactivo para gestionar la inscripción.
   */
  inscripcionForm: FormGroup;
   /**
   * Controla la visibilidad del modal de confirmación.
   */
  modalVisible = false;
    /**
   * Mensaje que se muestra en el modal de confirmación.
   */
  mensajeConfirmacion = '';

  temperatura: number | null = null;
   /**
   * Constructor del componente.
   * 
   * @param fb Servicio FormBuilder para construir el formulario reactivo.
   */
  constructor(private fb: FormBuilder,private weatherService: WeatherService) {
    this.inscripcionForm = this.fb.group({
      nombreNino: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(3), Validators.max(18)]],
      nombrePadre: ['', [Validators.required, Validators.minLength(3)]],
      taller: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]]
    });
  }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(
      data => {
        this.temperatura = data.current.temperature_2m;
      },
      error => {
        console.error('Error al obtener el clima', error);
      }
    );
  }
   /**
   * Obtiene los controles del formulario para facilitar el acceso en la plantilla.
   */

  get f() {
    return this.inscripcionForm.controls;
  }

  /**
   * Método ejecutado al enviar el formulario.
   * Si es válido, muestra el modal de confirmación con el nombre del niño.
   */
  onSubmit() {
    if (this.inscripcionForm.valid) {
      this.mensajeConfirmacion = `Confirmar inscripción para ${this.f['nombreNino'].value}?`;
      this.modalVisible = true;
    }
  }
   /**
   * Confirma la inscripción, muestra una alerta y resetea el formulario.
   */

  confirmarInscripcion() {
    alert('¡Inscripción confirmada!');
    this.modalVisible = false;
    this.inscripcionForm.reset();
  }
  /**
   * Cancela el modal de confirmación sin realizar la inscripción.
   */

  cancelarModal() {
    this.modalVisible = false;
  }
}