import { Input, Table, Spin, Button } from 'antd';
import * as React from 'react';
import Web3 from 'web3';
const Search = Input.Search;


class BlockTable extends Table<> {}
class BlockColumn extends Table.Column<> {}

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

class SearchBlock extends React.Component<> {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      loading: true,
      block_ids: [],
      block_hashes: [],
      curr_block: null
    };
  }
  
  componentWillMount() {
    console.log(web3.eth.accounts);
    let curr_block_no = web3.eth.blockNumber;
    console.log(curr_block_no);
    this.setState({
      curr_block: curr_block_no
    });
  }

  render() {
    if (this.state.loading) {
      return <Spin size="large"/>;
    }
    return (
      <div>
        <div style={{ background: '#fff', padding: 0 }}>
          <div>
            <Search
              placeholder="Input block ID or block hash"
              onSearch={this.onSearch}
              enterButton={true}
              size="large"
              style={{maxWidth: '400px'}}
            />
          </div>
        </div>
        <div style={{position: 'relative'}}>
          <BlockTable dataSource={this.state.blocks} loading={this.state.searching}>
            <BlockColumn dataIndex="height" title="单位"/>
            <BlockColumn dataIndex="hash" title="姓名"/>
            <BlockColumn dataIndex="timestamp" title="院系"/>
            <BlockColumn dataIndex="title" title="职务/职称"/>
            <BlockColumn dataIndex="miner" title="电话"/>
            <BlockColumn dataIndex="transactions" title="邮箱"/>
            <BlockColumn dataIndex="extraData" title="地址"/>
          </BlockTable>
        </div>
      </div>
    );
  }

  onSearch = (keyword) => {

  }
}

export default SearchBlock;
