import { Input, Table } from 'antd';
import * as React from 'react';
import Web3 from 'web3';
const Search = Input.Search;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

class SearchBlock extends React.Component<> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      blocks: [],
      currentBlock: null,
    };

  }

  async componentWillMount() {
    let currentBlockNumber = 0;
    await web3.eth.getBlockNumber()
      .then(res => currentBlockNumber = res)
      .catch(e => console.error(e));
    console.log(currentBlockNumber);
    this.getBlocks(currentBlockNumber);
  }

  async getBlocks(currentBlockNumber) {
    const blocks = this.state.blocks.slice();
    let maxBlocks = currentBlockNumber;
    let currentBlockObject;
    for (let i = 0; i < maxBlocks; i++, currentBlockNumber--) {
      await web3.eth.getBlock(currentBlockNumber)
        .then(res => currentBlockObject = res);
      console.log(currentBlockObject);
      blocks.push(currentBlockObject);
    }
    this.setState({
      blocks: blocks,
      loading: false
    });

  }

  render() {
    return (
      <div>
        <div style={{ background: '#fff', padding: 0 }}>
          <div>
            <Search
              placeholder="请输入区块ID或区块哈希"
              onSearch={this.onSearch}
              enterButton={true}
              size="large"
              style={{maxWidth: '400px'}}
            />
          </div>
        </div>
        <div style={{position: 'relative'}}>
          <Table dataSource={this.state.blocks} loading={this.state.loading} >
            <Table.Column dataIndex="number" title="区块号"/>
            <Table.Column dataIndex="size" title="块大小"/>
            <Table.Column dataIndex="hash" title="区块哈希"/>
            <Table.Column dataIndex="timestamp" title="时间戳"/>
            <Table.Column dataIndex="difficulty" title="难度"/>
            <Table.Column dataIndex="nonce" title="Nonce"/>
          </Table>
        </div>
      </div>
    );
  }

  onSearch = async (keyword) => {
    this.setState ({
      loading: true,
      blocks: []
    });
    console.log(keyword);
    await web3.eth.getBlock(keyword)
      .then (res => this.state.currentBlock = res);
    console.log(this.state.currentBlock);
    let searchBlock = [];
    searchBlock.push(this.state.currentBlock);
    this.setState ({
      blocks: searchBlock,
      loading: false
    });

  };
}

export default SearchBlock;
