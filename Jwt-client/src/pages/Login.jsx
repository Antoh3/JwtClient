import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GoogleOutlined,FacebookFilled,TwitterOutlined } from "@ant-design/icons"
import AuthService from '../services/AuthService'
import { Form, Input, Typography, Card, Flex, Button, Divider, message, Spin } from 'antd'

function Login() {
    const [loading,setLoading] = useState(null)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginUser = async (e) =>{
        // e.preventDefault();
        setLoading(true);
        
        try {
            await AuthService.login(email, password).then(
                (res) =>{
                    if (res.status === 200) {
                        message.success("Login Successfull")
                        setTimeout(()=>{
                            navigate('/home')
                        },2000)
                        
                        // window.location.reload();
                    }
                },
                (error) =>{
                    message.error("Invalid Email/Password");
                    console.log(error);
                }
            )

        } catch (error) {
            message.error(error)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }
    }
    const  handelLogin = (values) => {
        //console.log(values);
     loginUser(values);
    }

    return (
        <>
            <div className="loginform">
                <Card>
                    <Flex gap='large'>
                        {/* form */}
                        <Flex vertical flex={1}>
                            <Typography.Title level={3} strong className='tittle'>
                                Sign In
                            </Typography.Title>
                            <Typography.Text type='secondary' strong className='slogan'>
                                Unlock your account
                            </Typography.Text>
                            <Form
                                layout='vertical'
                                onFinish={handelLogin}
                                autoComplete='off'
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Password",
                                        }
                                    ]}
                                >
                                    <Input.Password placeholder='Enter  your password' />
                                </Form.Item>
                                <Button type={`${loading ? '' : 'primary'}`} htmlType='submit' block>{loading ? <Spin /> : 'Login'}</Button>
                                <Divider style={{ borderColor: "black" }}>or login with</Divider>
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

export default Login