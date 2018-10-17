import * as React from 'react';
import { Input, Table } from 'antd';
import Web3 from "web3";
const Search = Input.Search;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

class SearchTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      transactions: [],
      searchTransaction: null
    };
  }

  async componentWillMount() {
    let currentBlockNumber = 314;
    const transactions = this.state.transactions.slice();
    let currentTransObject;
    // await web3.eth.getBlockNumber()
    //   .then(res => currentBlockNumber = res)
    //   .catch(e => console.error(e));
    // console.log(currentBlockNumber);
    let transNumber = 0;
    await web3.eth.getBlock(currentBlockNumber)
      .then(res =>  transNumber = res.transactions.length)
    console.log(transNumber);
    for (let i = 0; i < transNumber; i++) {
      await web3.eth.getTransactionFromBlock(currentBlockNumber, i)
        .then(res => currentTransObject = res);
      console.log(currentTransObject);
      transactions.push(currentTransObject);
    }
    this.setState({
      transactions: transactions,
      loading: false
    });
  }

  render() {
    return (
      <div>
        <div style={{ background: '#fff', padding: 0 }}>
          <div>
            <Search
              placeholder="请输入交易账户"
              onSearch={this.onSearch}
              enterButton={true}
              size="large"
              style={{maxWidth: '400px'}}
            />
          </div>
        </div>
        <div style={{position: 'relative'}}>
          <Table dataSource={this.state.transactions} loading={this.state.loading} >
            <Table.Column dataIndex="blockNumber" title="块号"/>
            <Table.Column dataIndex="blockHash" title="块哈希"/>
            <Table.Column dataIndex="gas" title="Gas"/>
            <Table.Column dataIndex="gasPrice" title="Gas价格"/>
            <Table.Column dataIndex="from" title="发起方"/>
            <Table.Column dataIndex="to" title="接收方"/>
          </Table>
        </div>
      </div>
    );
  }
}

export default SearchTransaction;
