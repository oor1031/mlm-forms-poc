
import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Typography, Result } from "antd";
import { useHistory } from "react-router";
import axios from "axios";

const { Title } = Typography;

const ProgramResult = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios.get(`https://tm27x.sse.codesandbox.io/users`).then((res) => {
      setAllData(res.data);
    });
  });

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

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={18}>

          <Result
            status="success"
            title="Successfully Created Change Request!"
            subTitle="Program Name: {name}, Change Request Key :  {key}"
            extra={[
              <Button href={'/programs' } type="primary" key="resultDismiss">
                Dismiss
      </Button>,
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProgramResult;



