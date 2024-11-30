'use client';
import { deleteTask } from '@/utils/actions';
import { useFormStatus } from 'react-dom';

type DeleteFormProps = {
  id:string
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className='btn btn-xs btn-error' disabled={pending}>
      {pending ? 'pending...' : 'delete'}
    </button>
  );
};

const DeleteForm = ({ id } : DeleteFormProps) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;