<?php
/**
 * Created by PhpStorm.
 * User: Velmont
 * Date: 2018-09-02
 * Time: 오후 9:17
 */

namespace App\Lib;

use Trello\Client;


class TrelloApi
{
    /**
     * @var Client
     */
    protected $client;

    /**
     * @param string $apiKey
     * @param string $token
     * @return $this
     */
    public function init(string $apiKey, string $token)
    {
        $this->client = new Client();
        $this->client->authenticate($apiKey, $token, Client::AUTH_URL_CLIENT_ID);
        $boards = $this->client->api('member')->boards()->all();
        return $this;
    }

    public function get()
    {

    }
}