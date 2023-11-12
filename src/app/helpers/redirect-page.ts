import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const redirectToPge = (pages: string[]) => {
    const router = inject(Router);
    router.navigate(pages);
}