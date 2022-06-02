class HairstylesController < ApplicationController

    def index
        render json: Hairstyle.all, status: :ok
      end
  
      def show
        hairstyle = Hairstyle.find_by(id: params[:id])
        if hairstyle 
          render json: hairstyle, status: :ok
        else
          render json: {error: "hairstyle not found"}, status: :not_found
        end
      end
    
      def create
        hairstyle = Hairstyle.create(hairstyle_params)
        hairstyle.creator = @current_user
        hairstyle.save!
        render json: hairstyle, status: :created
      end

      def update 
        hairstyle = Hairstyle.find_by(id: params[:id])
        if hairstyle
            hairstyle.update(hairstyle_params)
            render json: hairstyle, status: :accepted
        else
          render json: {error: "hairstyle not found"}, status: :not_found
        end
      end

        def destroy
          hairstyle = Hairstyle.find_by(id:params[:id])
          if hairstyle
            hairstyle.destroy
            head :no_content
          else
            render json: {error: "hairstyle not found"}, status: :not_found
          end
        end
      

      private
    
      def hairstyle_params
        params.permit(:title, :instructions, :minutes_to_complete)
      end
end
