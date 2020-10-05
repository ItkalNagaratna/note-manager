import React from 'react';
import styled from 'styled-components';
import { Input, Card, Checkbox, Typography, Row, Col, Button, Timeline } from 'antd';
import { DeleteOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Search } = Input;


const initialData = [
    {
        id: 1212,
        note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    },
    {
        id: 1213,
        note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    },
    {
        id: 1214,
        note: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },

];


class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: initialData,
            note: '',
            list: []
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    sendMessage(note) {
        if (!note) {
            return;
        }
        const newData = {
            id: Math.random(),
            note: note,
            edited: false

        }
        const data = [newData, ...this.state.data];

        this.setState({
            data: data,
            note: '',
        })

    }


    onChange(e) {
        this.setState({ note: e.target.value });

    }


    deleteItem(key) {
        const data = [...this.state.data];
        // Filter values and leave value which we need to delete 
        const updateList = data.filter(item => item.id !== key);
        // Update list in state 
        this.setState({
            data: updateList,
        });
    }


    render(props) {
        const { data } = this.state;

        return (
            <NoteContainer>
                <Row >


                    <Col xs={{ span: 24 }} md={{ span: 18, offset: 3 }} lg={{ span: 16, offset: 4 }} xl={{ span: 14, offset: 5 }} xxl={{ span: 12, offset: 6 }}>

                        {/* <div style={{ textAlign: "center", marginTop: 40, marginBottom: 30 }}>
                            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Note Manager</Text>

                        </div> */}

                        <Search style={{marginTop:30}} 
                            placeholder="Add Note"
                            enterButton="Add"
                            size="large"
                            onSearch={this.sendMessage}
                            onChange={this.onChange}
                            value={this.state.note}
                        />

                        <NoteItem>
                            <Timeline mode="alternate">
                                {data && data.length > 0 && data.map((item, index) => {
                                    return (
                                        <Timeline.Item key={item.id}>
                                            <Card style={{ backgroundColor: "#ffc" }} className="cardBody">
                                                <Text style={{ fontSize: 12, display: "flex", justifyContent: "flex-start", }}>{item.note}</Text>
                                                <DeleteOutlined onClick={() => this.deleteItem(item.id)} style={{ display: "flex", justifyContent: "flex-start", marginTop: 30 }} />
                                            </Card>
                                        </Timeline.Item>

                                    )
                                })}
                            </Timeline>

                        </NoteItem>


                        {data && data.length === 0 &&
                            <div style={{ background: '#eee', padding: 20, borderRadius: 5 }}>
                                You haven't added any todo lists yet, Please add some todo item first.
                                </div>
                        }

                    </Col>
                </Row>
            </NoteContainer>
        )
    }

}

export default TodoList;




const NoteContainer = styled.div`
  display: grid;

  .ant-btn-primary {
    color: #fff;
    background: #c71818;
    border-color: #c71818;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}

`;

const NoteItem = styled.div`
 margin-top:100px;
 clear:"both";

 .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #5d5e96;
  border-color: #5d5e96;
}


.anticon svg {
    display: inline-block;
    font-size: 20px;
    color: #ec0000;
}

.ant-card-body {
    padding: 24px;
    -moz-box-shadow: 5px 5px 7px rgba(33,33,33,1);
    -webkit-box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    /* -moz-transition: "-moz-transform .15s linear";
    -o-transition:" -o-transform .15s linear";
    -webkit-transition:" -webkit-transform .15s linear"; */    
}

.cardBody {
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
}


`;