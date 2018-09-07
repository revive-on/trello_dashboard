<?php
/**
 * Created by PhpStorm.
 * User: 김대훈
 * Date: 2018-09-07
 * Time: 오전 8:46
 */

namespace App\Service;


use DateTime;

/**
 * Class DateTimeService
 * @package App\Service
 *
 * @method string getNow()
 * @method string getYear()
 * @method string getMonth()
 * @method string getDay()
 * @method string getHour()
 * @method string getMinute()
 * @method string getSecond()
 */
class DateTimeService
{
    use \GetSetGo\SetterGetter;

    const DATE_TIME_FORMAT = 'Y-m-d H:i:s';
    /**
     * @var DateTime
     * @setter false
     */
    protected $now;

    /**
     * @var string
     * @setter false
     */
    protected $year;

    /**
     * @var string
     * @setter false
     */
    protected $month;

    /**
     * @var string
     * @setter false
     */
    protected $day;

    /**
     * @var string
     * @setter false
     */
    protected $hour;

    /**
     * @var string
     * @setter false
     */
    protected $minute;

    /**
     * @var string
     * @setter false
     */
    protected $second;

    /**
     * @param string $timeString
     * @return DateTimeService
     */
    public function init(string $timeString = ''): DateTimeService
    {
        if (empty($timeString))
            $timeString = 'now';
        $this->now = new DateTime($timeString, new \DateTimeZone("Asia/Seoul"));
        $this->year = $this->now->format('Y');
        $this->month = $this->now->format('n'); // leading zeros : m
        $this->day = $this->now->format('j'); // leading zeros : d

        $this->hour = $this->now->format('H');
        $this->minute = $this->now->format('i');
        $this->second = $this->now->format('s');

        return $this;
    }
}