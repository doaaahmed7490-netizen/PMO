import { FormControl } from '@angular/forms';

export interface user {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  address: FormControl<string | null>;
  mobile: FormControl<string | null>;
  contactInfo: FormControl<string | null>;
}
