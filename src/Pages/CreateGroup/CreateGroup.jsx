import React, { use } from 'react';
import CreateGroupForm from '../../Components/CreateGroupForm/CreateGroupForm';
import { AuthContext } from '../../Context/AuthProvider';

const CreateGroup = () => {

    const { user } = use(AuthContext);

    return (
        <div className='py-10 md:py-20 w-11/12 md:w-10/12  mx-auto'>
            <CreateGroupForm user={user}></CreateGroupForm>
        </div>
    );
};

export default CreateGroup;