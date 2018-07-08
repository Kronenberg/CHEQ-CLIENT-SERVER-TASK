import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CreateVastForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="vast_url"
            component="input"
            type="text"
            placeholder="type VastURL"
          />
        </div>
      </div>

      <div>
        <label>vast position</label>
        <div>
          <Field name="position" component="select">
            <option />
            <option value="bottom_left">bottom_left</option>            <option value="top_left">top_left</option>
            <option value="top_middle">top_middle</option>
            <option value="top_right">top_right</option>
            <option value="middle_left">middle_left</option>
            <option value="middle_right">middle_right</option>
            <option value="bottom_left">bottom_left</option>
            <option value="bottom_middle">bottom_middle</option>
            <option value="bottom_right">bottom_right</option>
            <option value="top_middle">top_middle</option>
            <option value="top_middle">top_middle</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">show/hide</label>
        <div>
          <Field
            name="hide_ui"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'CreateVastForm' // a unique identifier for this form
})(CreateVastForm)