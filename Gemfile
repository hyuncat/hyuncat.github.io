ENV["LANG"] = "en_US.UTF-8"
source "https://rubygems.org"
#
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minimal-mistakes-jekyll" 
gem 'webrick', '>=1.7.0'

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", "~> 229", group: :jekyll_plugins
# gem "jekyll-include-cache", group: :jekyll_plugins
# gem "jekyll-sass-converter", "~> 2.2"
# gem 'sassc'


# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-include-cache"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
