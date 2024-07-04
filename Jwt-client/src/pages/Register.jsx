import React, { useState } from 'react'
import {
    GoogleOutlined,
    FacebookFilled,
    TwitterOutlined,
} from "@ant-design/icons"
import { Form, Input, Typography, Card, Flex, Button, Divider, message, Spin } from 'antd'

function Register() {
    // const [values,setValues] = useState({})
    const [loading,setLoading] = useState(null)


    const  registerUser  = async (values) =>{

        if (values.password.length < 6) {
            message.error("Password too short")
        }



        try {
            setLoading(true);

            const res = await fetch("https://localhost:7084/api/users/register",{
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(values),
            })



            const data = await res.json();

            
            console.log(data);

            if (values.email = data.Email) {
                message.error("User already exists")
            }

            
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
        }
          
    }

    const handleInputChange = (e) =>{
            setValues({...values, [e.target.name]: e.target.value});
    }

    const handelRegister = (values) => {
        registerUser(values);
    }

    return (
        <>

            <div className="registerform">
                <Card className='form-container'>
                    <Flex gap='large'>
                        {/* form */}
                        <Flex vertical flex={1}>
                            <Typography.Title level={3} strong className='tittle'>
                                Sign Up
                            </Typography.Title>
                            <Form
                                layout='vertical'
                                onFinish={handelRegister}
                                autoComplete='off'
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    // onChange={handleInputChange}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your username",
                                        }
                                    ]}
                                >
                                    <Input placeholder='Enter  your Username' />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    // onChange={handleInputChange}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Email",
                                        }, {
                                            type: 'email',
                                            message: 'The email is invalid'
                                        }
                                    ]}
                                >
                                    <Input placeholder='Enter  your Email' />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    // onChange={handleInputChange}
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Password",
                                        }
                                    ]}
                                >
                                    <Input.Password placeholder='Enter  your password' />
                                </Form.Item>
                                {/* <Form.Item
                                    label="Confirmpassword"
                                    name="confirmPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please confirm your Password",
                                        }
                                    ]}
                                >
                                    <Input.Password placeholder='Enter  your password again' />
                                </Form.Item> */}

                                <Button
                                 type={`${loading ? '' : 'primary'}`} 
                                 htmlType='submit' block>{loading ? <Spin /> : "Sign Up"}</Button>

                                <Divider style={{ borderColor: "black" }}>or register with</Divider>
                                <div className='socialicons'>
                                    <GoogleOutlined className='socialicon' style={{ color: "red" }} />
                                    <FacebookFilled className='socialicon' />
                                    <TwitterOutlined className='socialicon' style={{ color: "blue" }} />
                                </div>

                            </Form>
                        </Flex>


                    </Flex>
                </Card>


            </div>
        </>
    )
}

export default Register