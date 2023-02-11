import React from "react"
import { useForm } from "react-hook-form";
import { TextInput } from "../../../components/TextInput/TextInput/TextInput";
import { LAYOUT_API } from "../helpers/api/api";
import useLayout from "../helpers/hooks/useLayout";

import "./CreateTodo.scss";

const CreateTodo = () => {
    const { actions } = useLayout();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {

        const newData = {
            ...data,
            user: actions.currentUser?.id
        }

        const requests = LAYOUT_API.createTodo(newData);

        requests.then(res => console.log(res))
    }


    const formValidate = (state) => {
        return {
            required: `${state} is requires area!`
        }
    }

    return (
        <div className="container">
            <div className="create_parent">
                <div className="create_parent_title">
                    <h2>Create your list of tasks</h2>
                </div>

                <div className="create_parent_row">
                    <form onSubmit={handleSubmit(onSubmit)} className="create_parent_row_form">
                        <div>
                            <TextInput
                                type="text"
                                placeholder="Title"
                                {...register("title", formValidate("Title"))}
                            />
                            
                            {errors?.title && <p className="error">
                                {errors.title.message}
                            </p> }
                        </div>
                        <div>
                            <TextInput
                                type="text"
                                placeholder="Description"
                                {...register("description", formValidate("Description"))}
                            />

                            {errors?.description && <p className="error">
                                {errors.description.message}
                            </p> }
                        </div>
                        <div>
                            <TextInput
                                type="date"
                                {...register("date", formValidate("Date"))}
                            />

                            {errors?.date && <p className="error">
                                {errors.date.message}
                            </p> }
                        </div>

                        <button type="submit">Create</button>
                    </form>

                    <div className="banner">
                        <img />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo;