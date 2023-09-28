import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import "./RegularForm.css"

interface FormData {
  username: string;
  email: string;
  password: string;
}

function RegularForm() {
  const { control, handleSubmit, formState, reset } = useForm<FormData>();
  const { errors } = formState;

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
    reset(); // Clear form fields after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: 'Username is required', minLength: 2 }}
          render={({ field }) => (
            <div>
              <input
                type="text"
                id="username"
                placeholder="Enter UserName"
                {...field}
              />
              {errors.username && (
                <p style={{ color: 'red' }}>{errors.username.message}</p>
              )}
            </div>
          )}
        />
      </div>
      <div>
      <Controller
  name="email"
  control={control}
  defaultValue=""
  rules={{
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Invalid email address',
    },
  }}
  render={({ field }) => (
    <div>
      <input
        type="text"
        id="email"
        placeholder="Enter Email"
        {...field}
      />
      {errors.email && (
        <p style={{ color: 'red' }}>{errors.email.message}</p>
      )}
    </div>
  )}
/>
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <input
                type="text"
                id="password"
                placeholder="Enter Password"
                {...field}
              />
            </div>
          )}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
