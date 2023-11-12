import { Route } from "@angular/router";
import { PageOneComponent } from "./page-one/page-one.component";
import { PageTwoComponent } from "./page-two/page-two.component";
import { PageThreeComponent } from "./page-three/page-three.component";
import { DynamicComponent } from "./dynamic/dynamic.component";

export const TEST_ROUTES: Route[] = [
    {
        path: '',
        component: DynamicComponent
    },
    {
        path: 'page-one',
        component: PageOneComponent
    },
    {
        path: 'page-two',
        component: PageTwoComponent
    },
    {
        path: 'page-three',
        component: PageThreeComponent
    }
]