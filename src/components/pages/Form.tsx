import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  Radio,
  Switch,
  Slider,
  Select,
  message, Popconfirm, Modal, Space
} from "antd";
import axios from "axios";
import { useHistory } from "react-router";
import { FlexGrid } from "@grapecity/wijmo.grid";

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const key = 'formMessageKey';

const FormApp = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

 const createChangeRequestHandler = (values: any) => {

  
   
    setLoading(true);
   message.loading({ content: 'Creating Change Request...', key });
   axios.post("http://localhost:5000/users", values )
     .then(res => {
       setLoading(false);
       message.success({ content: 'Success!', key, duration : 1 });
       history.push("/programResult");
     })
       .catch((error) => {
         setLoading(false);
         message.error({ content: error,key, duration : 2 } );
       });
  }
  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            Please Fill the User Form
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} onFinish={createChangeRequestHandler}>
            <Form.Item
              name="username"
              label="UserName"
              rules={[
                {
                  required: true,
                  message: "Please input your name"
                }
              ]}
            >
              <Input placeholder="Please Enter your username" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your correct email",
                  type: "email"
                }
              ]}
            >
              <Input placeholder="Please Enter your email" />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select your gender"
                }
              ]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="others">Others</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="hobbies"
              label="Hobbies"
              rules={[
                {
                  required: true,
                  message: "Please select your hobbies",
                  type: "array"
                }
              ]}
            >
              <Select mode="multiple" placeholder="Please select you hobbies">
                <Select.Option value="Reading">Reading</Select.Option>
                <Select.Option value="Writing">Writing</Select.Option>
                <Select.Option value="Coding">Coding</Select.Option>
                <Select.Option value="Singing">Singing</Select.Option>
                <Select.Option value="Dancing">Dancing</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="review" label="Review">
              <Slider />
            </Form.Item>
            <Form.Item
              name="notificaiton"
              label="Notificaiton"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <div style={{ textAlign: "right" }}>
              <Button type="primary" loading={loading} htmlType="submit">
                Save
              </Button>{" "}
              <Button
                type="default"
                htmlType="button"
                onClick={() => history.push("/list")}
              >
                Back
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};



const ReachableContext = React.createContext({});
const UnreachableContext = React.createContext({});

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{name => `Reachable: ${name}!`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{name => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
    </>
  )
};

const ModalConfirm = () => {
  const [modal, contextHolder] = Modal.useModal();
  
  return (
    <ReachableContext.Provider value="Light">
      <Space>
        <Button
          id="modalConfirmButton"
          onClick={() => {
            modal.confirm(config);
          }}
        >
          Confirm
        </Button>
        <Button
                    id="modalWarningButton"

          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            modal.info(config);
          }}
        >
          Info
        </Button>
        <Button
          id="modalErrorButton"
          onClick={() => {
            modal.error(config);
          }}
        >
          Error
        </Button>
      </Space>
      {/* `contextHolder` should always under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};

export default FormApp;
