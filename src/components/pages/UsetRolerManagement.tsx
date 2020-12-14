import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Typography, Spin, message, Empty } from "antd";
import { useHistory } from "react-router";
import axios from "axios";
import { LoadingOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';
import UserRoleForm from './UserRoleForm';

const UserRoleManagement = () => {
  const { Title } = Typography;

  const [loading, setLoading] = useState(true);
  const [recordCount, setRecordCount] = useState(-1)
  const [allData, setAllData] = useState([]);
  const history = useHistory();

  const columns = [
    {
      title: "Username",
      dataIndex: "username"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Gender",
      dataIndex: "gender"
    },
    {
      title: "Review",
      dataIndex: "review"
    }
  ];

  const data = [{}];

  allData.map((user: any) => {
    data.push({
      key: user.id,
      username: user.username,
      email: user.email,
      review: user.website
    });
    return data;
  });

  const handleClick = () => {
    history.push("/form");
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const key = 'updatable';

  const fetchEngPrograms = () => {

    axios.get(`http://localhost:5000/users`).then((response) => {
      setRecordCount(response.data.length)
      setAllData(response.data);

    })
      .then((response) => {
        setLoading(false);
        message.success({ content: `Loaded!`, key, duration: 1 });
      })
      .catch((error) => {
        setLoading(false);
        message.error({ content: error, key, duration: 2 });
      });
  };




  useEffect(() => {
    fetchEngPrograms();
  }, [])


  return (<div>
    <Row gutter={[40, 0]}>
      <Col span={18}>
        <Title level={2}>
          User Role Management
          </Title>
      </Col>
      <UserRoleForm/>
    </Row>

  </div>)
}


export default UserRoleManagement



