import react from 'react';
import {getByTestId, render , screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Add from "/Users/cesar/Desktop/second-angular/QA cypress/Acceptance testing ATDD/todo-app-tau/src/Add.js";

describe('todo add', ()=>{
    test('storing input value',async()=>{
        render(<Add />);

        await userEvent.type(screen.getByTestId("todo-input"), "second todo item");
        expect (screen.getByDisplayValue(/second todo item/ )).toBeInTheDocument();




    })
})