=begin

  Code by midnightSuyama: https://github.com/midnightSuyama/jekyll-paginate-category/blob/master/lib/jekyll-paginate-category.rb
  Category path and layout code tweaked for this project by DVK

=end

module Jekyll
  module Paginate
    module Category
      
      class Pagination < Generator
        safe true
        priority :lowest

        def generate(site)
          if Paginate::Pager.pagination_enabled?(site)
            site.categories.each do |category, posts|
              total = Paginate::Pager.calculate_pages(posts, site.config['paginate'])
              (1..total).each do |i|
                site.pages << IndexPage.new(site, category, i)
              end
            end
          end
        end
      end

      class IndexPage < Page
        def initialize(site, category, num_page)
          @site = site
          @base = site.source

          category_path = site.config['category_path'] || 'categories'
          @dir = File.join(category_path, category)

          @name = Paginate::Pager.paginate_path(site, num_page)
          @name.concat '/' unless @name.end_with? '/'
          @name += 'index.html'

          self.process(@name)

          category_layout_file = site.config['category_layout'] || 'index.html'
          category_layout = '/_layouts/' + category_layout_file
          self.read_yaml(@base, category_layout)
          
          self.data.merge!(
                           'title'     => category,
                           'paginator' => Paginate::Pager.new(site, num_page, site.categories[category])
                          )
        end

        def template
          '/:path/:basename:output_ext'
        end
      end
      
    end
  end
end