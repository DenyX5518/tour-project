import {Form, Input} from 'antd'
import type { FieldType } from '../../../types/typesForm'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { setFields } from '../../../features/formSlice';

export default function FormModal() {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const isModalOpen = useSelector((state: RootState) => state.isModalOpen)
    if (isModalOpen === false){
        form.resetFields()
    }

    return (
        <div>
        <Form
            form={form}
            onValuesChange={(changedValues) => {
                const name:any = Object.keys(changedValues)[0];
                dispatch(setFields({ name, value: changedValues[name] }));
            }}
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>
            <Form.Item<FieldType>
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone!' }]}>
                <Input />
            </Form.Item>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
            </Form.Item>
        </Form>
        </div>
    )
}
