import { useRef } from 'react';
import Input from './Input.jsx'
function NewProject({onAddProjectDetail}){
    const title= useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
      const enteredTitle = title.current.value
      const enteredDescription = description.current.value
      const enteredDueDate = dueDate.current.value
      onAddProjectDetail({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      })

    }
    return (
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button className='px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md' onClick={handleSave}>Save</button></li>
        </menu>
        <div>
            <Input type="text" ref ={title} lable="Title" />
            <Input ref = {description} lable="Description" textarea/>
            <Input  type ="date" ref = {dueDate} lable="Due Date"/>
        </div>

    </div>
    );
};

export default NewProject;