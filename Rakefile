namespace :pygments do

  desc 'Delete pygments CSS files'
  task :clean do
    system "rm -f static/_sass/pygments.scss"
  end

  desc 'Generate pygments CSS'
  task :compile => [:clean] do
    system "mkdir -p static/_sass"
    system "pygmentize -a .highlight -S fruity -f html > static/_sass/pygments.scss"
  end

end