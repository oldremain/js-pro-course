import React, { useEffect, useState } from 'react';
import FormField from '../../UI/FormField/FormField';
import Button from '../../UI/Button/Button';
import FormValuesType from '../../../types/FormValuesType';

import './Controls.scss';

const Controls: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // if (
        //   values.name &&
        //   values.email &&
        //   values.password === values.passwordConfirm
        // ) {
        //   console.log(values, 'was sent');
        //   setValues({});
        // } else {
        //   console.log('Passwords don`t match by each other');
        // }
        // Здесь наверное могла быть какая-то валидация
        setValues({});
    };

    useEffect(() => {
        console.log(values, 'current state');
    }, [values]);

    return (
        <form action="#" className="Form-body">
            <FormField
                autofocus={true}
                label="Name"
                values={values}
                name="name"
                setValues={setValues}
            />
            <FormField
                label="Email"
                values={values}
                type="email"
                name="email"
                setValues={setValues}
            />
            <FormField
                label="Password"
                values={values}
                type="password"
                name="password"
                setValues={setValues}
            />
            <FormField
                label="Confirm password"
                values={values}
                type="password"
                name="passwordConfirm"
                setValues={setValues}
            />
            <Button onClick={submitHandler}>Sign up</Button>
        </form>
    );
};

export default Controls;
