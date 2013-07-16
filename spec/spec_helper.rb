Dir["../helper/*.rb"].each {|file| require file }
$:<< File.join(File.dirname(__FILE__), '../helper')

require 'rspec'