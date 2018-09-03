<?php
/**
 * Created by PhpStorm.
 * User: Velmont
 * Date: 2018-09-02
 * Time: 오후 9:17
 */

namespace App\Lib;

use Trello\Client;
use Trello\Manager;


class TrelloApiService
{
    /**
     * @var Client
     */
    protected $client;

    /**
     * @var array
     */
    protected $contents;

    /**
     * @param string $apiKey
     * @param string $token
     * @return
     */
    public function init(string $apiKey, string $token): TrelloApiService
    {
        $this->client = new Client();
        $this->client->authenticate($apiKey, $token, Client::AUTH_URL_CLIENT_ID);
        return $this;
    }

    public function getBoardCard(string $boardId, array $filter = [])
    {
        $boardCards = $this->client->boards()->cards()->all($boardId);
        if (!empty($filter['id'])) {
            $filtered_cards = [];
            $id = $filter['id'];
            // TODO : fix filter pattern
            foreach ($boardCards as $card) {
                if (is_array($card['idMembers']) && in_array($id, $card['idMembers'])) {
                    $filtered_cards[] = $card;
                }
            }
            $boardCards = $filtered_cards;
        }
        if (!empty($filter['status'])) {
            $filtered_cards = [];
            //todo
        }
        $this->contents = $boardCards;
        return $this;
    }

    public function get(): array
    {
        return $this->contents;
    }
}