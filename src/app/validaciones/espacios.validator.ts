import { AbstractControl } from '@angular/forms';

export function VerificarEspacios(c: AbstractControl) {
    if (c.value == null) return null
    if (c.value.indexOf(' ') >= 0) {
        return { conEspacios: true}
    } //si hay un espacio
    return null
}