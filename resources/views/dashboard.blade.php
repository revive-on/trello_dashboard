<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        @include('admin::partials.head')

    </head>
    <body>
        <div id="app">
        </div>
        @include('admin::partials.script')
    </body>
    <script src="js/app.js"></script>
</html>