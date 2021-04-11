import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User, ListOfUsers } from '../constant/home/home';
import * as UserActions  from "../store/actions";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  listOfUser: User[];
  constructor(
    private store: Store<{ userState: Array<ListOfUsers> }>,
    private formBuilder: FormBuilder
  ) {
    store.select(state => state.userState).pipe().subscribe((response: any) => {
      this.listOfUser = response.items;
    })
  }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group(
      {
        addUserInput: ["", [Validators.required, Validators.minLength(3)]]
      }
    );
  }

  addUser(): void {
    // const id = this.listOfUser.length > 0 ? this.listOfUser[this.listOfUser.length - 1].id+1 : 1;
    // this.store.dispatch(UserActions.createUser({ name: this.addUserForm.controls.addUserInput.value, id: id }));
    // this.addUserForm.controls.addUserInput.setValue(null)
  }

  public deleteAllUser(): void {
    this.store.dispatch(UserActions.deleteAllUsers());
  }

  public editAllUser(): void {
    this.store.dispatch(UserActions.editAllUsers());
  }

}
